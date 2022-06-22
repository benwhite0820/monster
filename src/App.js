import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            serachField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) =>
                this.setState(() => {
                    return { monsters: data };
                })
            );
    }

    onSearchChange = (e) => {
        this.setState(() => {
            return { serachField: e.target.value };
        });
    };

    render() {
        const { monsters, serachField } = this.state;
        const { onSearchChange } = this;

        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(serachField)
        );

        return (
            <div className="App">
                <input
                    className="search-box"
                    type="seatch"
                    placeholder="search monsters"
                    onChange={onSearchChange}
                />
                {filteredMonsters.map((monster) => {
                    return <h1 key={monster.id}>{monster.name}</h1>;
                })}
            </div>
        );
    }
}

export default App;
