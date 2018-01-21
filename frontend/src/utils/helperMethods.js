export function applyDelete(componentToDelete, list) {
  let updatedList = list;
  if(componentToDelete && list) {
    updatedList = [].concat(list).map((component) => {
      if(componentToDelete.id===component.id) { 
        componentToDelete = component;
        componentToDelete.deleted = true;
        return componentToDelete;
      } else {
        return component;
      }
    });
  }
  return updatedList;
}

export function applyUpdate(updatedComponent, list) {
  let isNewComponent = true;
  let updatedList = list;
  if(updatedComponent && list) {
    updatedList = [].concat(list).map((component) => {
      if(updatedComponent.id===component.id) { 
        isNewComponent = false;
        return updatedComponent;
      } else {
        return component;
      }
    });
    
    if(isNewComponent) updatedList.push(updatedComponent);
  }
  return updatedList;
}

export function filterComponents(components) {
  let componentsToReturn = components;
  if(components) {
    if(components.constructor === Array) {
      componentsToReturn = components.filter((component) => {
        return component.deleted === false;
      })
    } else {
      if(components.deleted === true) return [];
    }
  }
  return componentsToReturn;
}


export function isEmptyObject(componentToCheck) {
  let isEmpty = true;
  if(componentToCheck) {
    for(let i = 0; i < componentToCheck.length; i++) {
      if(componentToCheck[i] && componentToCheck[i].length > 0) 
        isEmpty = false;
    }
  }
  return isEmpty;
}