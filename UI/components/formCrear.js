import React from 'react'

export default class Formulario extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            clase: '',
            profesor: '',
            horario1: '',
            horario2: '',
        }
    }

    render() {
        const { clase, profesor, horario1, horario2 } = this.state
        return(
            <div>
                <form>
                    <label for>
                        Clase:
                        <input
                            type='text'
                            value={clase}
                            onChange={(e) => this.setState({ clase: e.target.value})}
                        />
                    </label>
                    <label for>
                        Profesor:
                        <input
                            type='text'
                            value={profesor}
                            onChange={(e) => this.setState({ profesor: e.target.value})}
                        />
                    </label>
                    <label for>
                        <input
                            type='text'
                            value={horario1}
                            onChange={(e) => this.setState({ horario1: e.target.value})}
                        />
                    </label>
                    <label for>
                        <input
                            type='text'
                            value={horario2}
                            onChange={(e) => this.setState({ horario2: e.target.value})}
                        />
                    </label>
                </form>
            </div>
        )
    }

}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 'black',
        marginBottom: 20
    }
})