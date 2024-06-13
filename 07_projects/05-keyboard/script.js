// console.log('Project 5');

const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                    <td>Event Key</td>
                    <td>Event KeyCode</td>
                    <td>Event Code</td>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'Space' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});
