export function getAsHTMLTemplate(string) {
    const dummyTemp = document.createElement('template');
    dummyTemp.innerHTML = string;

    return dummyTemp.content.cloneNode(true);
}
