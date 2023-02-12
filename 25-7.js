// Style CSS using JS
const nodeT = document.getElementById('second-id');
nodeT.classList.add('container');

const nodeY = document.querySelector('#second-id');

/**
 * We can traverse node using childNodes
 * nodeY.childNodes;
 * nodeY.childNodes[3].firstChild;
 * nodeY.childNodes[3].childNodes[1].innerText;
 * nodeY.childNodes[3].childNodes[1].innerText;
 * nodeY.childNodes[3].childNodes[1].nextSibling;
 * nodeY.childNodes[3].childNodes[1].previousSibling;
 */

/**
 * We can traverse back to parent node using parentNode
 * nodeY.childNodes;
 * nodeY.childNodes[3].childNodes[1].parentNode;
 * nodeY.childNodes[3].parentNode;
 * nodeY.parentNode; 
 */

// Even we can add element

// nodeY.childNodes[3].childNodes[1].
const li = document.createElement('li');
li.innerText = 'etc';
nodeY.childNodes[3].append(li);

nodeY.innerHTML = `
    <h1> I added from external JS</h1>
`;
