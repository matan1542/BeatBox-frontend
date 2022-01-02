
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return Promise.resolve(entities);
}

async function get(entityType, entityId) {
    const entities = await query(entityType)
    return entities.find(entity => entity.id === entityId)
}

async function post(entityType, newEntity) {
    newEntity.id = _makeId()
    const entities = await query(entityType)
    entities.push(newEntity);
    _save(entityType, entities)
    return newEntity;
}

async function postMany(entityType, newEntities) {
    const entities = await query(entityType)
    entities.push(...newEntities);
    _save(entityType, entities)
    return entities;
}

async function put(entityType, updatedEntity) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity.id === updatedEntity.id);
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity;

}

async function remove(entityType, entityId) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity.id === entityId);
    entities.splice(idx, 1)
    _save(entityType, entities)
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}