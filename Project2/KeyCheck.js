const insert = document.getElementById('keysCheck')

window.addEventListener('keydown', (e)=>{
    insert.innerHTML=`
    <div class="type">
        <table>
            <tr>
                <th>key</th>
                <th>keyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === " " ?"Space":e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `
})