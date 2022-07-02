export function getDataCustomCharacteristics(): string {
  const characteristics = localStorage.getItem("customCharacteristics");
  if (characteristics) return characteristics;

  return "[]";
}

export function setDataCustomCharacteristics(type: string, name: string, color: string): void {
  if(localStorage.getItem('customCharacteristics')){
    const data = JSON.parse(getDataCustomCharacteristics())

    if(data.custom[type]){
        if(data.custom[type].name){
            data.custom[type].name = name
        }

        if(data.custom[type].color){
            data.custom[type].color = color
        }
    }
    
    const newData = JSON.stringify(data)
    localStorage.setItem('customCharacteristics', newData)
  }
}