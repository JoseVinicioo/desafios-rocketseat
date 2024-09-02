export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
            .then(user => user.json())
            .then(({ name, login, public_repos, followers }) => ({
                name,
                login,
                public_repos,
                followers
            }))
    }
}


//vai conter como os dados serao estruturados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        const storedEntries = JSON.parse(localStorage.getItem('@github-favorites:'));
        this.entries = Array.isArray(storedEntries) ? storedEntries : [];
    }

    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username) {

        try {
            const userExists = this.entries.find(entry => entry.login === username)

            if(userExists){
                throw new Error('Usuário ja cadastrado')
            }

            const user = await GithubUser.search(username)

            if (user.login === undefined) {
                throw new Error('Usuário não encontrado')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()
        } catch (error) {
            alert(error.message)
        }
    }

    delete(user) {
        const filteredEntries = this.entries
            .filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
    }
}

//vai conter o html 
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')

            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = `${user.name}`
            row.querySelector('.user span').textContent = `${user.login}`
            row.querySelector('.repositories').textContent = `${user.public_repos}`
            row.querySelector('.followers').textContent = `${user.followers}`

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que quer remover este usuário? ')

                if (isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })

        const tableContainer = this.root.querySelector('.table-container')

        if(this.entries.length >= 1 ){
            tableContainer.classList.remove('noneUsers')
        }else{
            tableContainer.classList.add('noneUsers')
        }

    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/diego3g.png" alt="Imagem de Diego Fernandes">
                <a target="_blank" href="https://github.com/diego3g">
                    <p>Diego Fernandes</p>
                    <span>/diego3g</span>
                </a>
            </td>
            <td class="repositories">
                123
            </td>
            <td class="followers">
                1234
            </td>
            <td class="action">
                <span class="remove">Remover</span>
            </td>`
        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach(user => {
            user.remove()
        });
    }
}