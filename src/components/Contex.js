import React, { Component } from 'react';

export const contextProv = React.createContext()

class Contex extends Component {
    constructor(){
        super()
        this.state={
            bright:true,
            lightMode:{
                backgroundColor:'#27e16a'
            },
            darkMode:{
                backgroundColor:'#141414'
            }
        }
    }

    onChange =()=>{
        console.log('changed')
        this.setState({
            bright: !this.state.bright
        })
    }
    render() {
        return (
            <div>
                <contextProv.Provider  value={{...this.state, onChange:this.onChange}}>
                    {this.props.children}
                </contextProv.Provider>
            </div>
        );
    }
}

export default Contex;