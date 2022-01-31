import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NewPost from './components/NewPost/NewPost';
import Posts from './components/Posts/Posts';
import SearchPanel from "./components/SearchPanel/SearchPanel"



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { text: 'erewrwerwe', important: false, like: false, id: 1 },
                { text: '3453ertefd', important: false, like: false, id: 2 },
                { text: '345345345345', important: false, like: false, id: 3 },
            ],
            term : '',
            filter: 'all'
        }
        this.maxId = 4
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)
    }


    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => {
                return item.id === id
            })
            const newArr = [...data.slice(0, index), ...data.slice(index+1)]

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            text: body,
            important: false,
            like: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id)
            const old = data[index]
            const newitem = { ...old, important: !old.important}
            const newArr = [...data.slice(0, index), newitem, ...data.slice(index+1)]
            return {
                data: newArr
            }
        })
    }
    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id)
            const old = data[index]
            const newItem = {...old, like: !old.like}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }


    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.text.indexOf(term) > -1
        })
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        }  else {return items}

    }
    onFilterSelect(filter) {
        this.setState({filter})
    }


    render() {
        const {data, term, filter} = this.state
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

        const liked = this.state.data.filter(item => item.like).length
        const all = this.state.data.length
        return (
            <div className="app">
                <Header liked={liked} all={all} />
                <SearchPanel onFilterSelect={this.onFilterSelect} filter={filter} onUpdateSearch={this.onUpdateSearch}/>
                <Posts posts={visiblePosts} onToggleImportant={this.onToggleImportant} onToggleLiked={this.onToggleLiked} onDelete={this.deleteItem} />
                <NewPost onAdd={this.addItem} />
            </div>
        )
    }
}


export default App;
