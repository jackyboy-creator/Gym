import React from 'react'
import axios from 'axios'
import Main from "./Main";
import Search from "./Search";
import BodyButton from "./BodyButton";
import Header from "./Header";
import Exercise from "./Exercise";
import LoadingMessage from "./LoadingMessage";
import NoResultMessge from "./NoResultMessge";
import Reset from "./Reset";


class GymContainer extends React.Component{

    constructor() {
        super();

        this.state={                                                           //all the state we need to store
            exercises:[],
            isLoading:true,
            searchBox:"",
            bodyButton:'',
            Language:'English',
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)

        }

    componentDidMount() {                                                      //run some code right after component mounts on screen for first time
        const that = this                                                      //to keep instance of whats being called

        const one="https://wger.de/api/v2/exerciseinfo/"                           //Get Request on this Url

        const requestExercise=axios.get(one)

        requestExercise.then(function (result){             //request for the exercises from API
            return that.setState({exercises: result.data.results})
        })

        setTimeout(function(){                                          //Setting a time out so userKnows content is load
            return that.setState({
                isLoading:false
            })
        } , 2000)
    }

    handleChange(event){                //event returned when user types in search and presses a button
        const{name,value}=event.target
        this.setState({[name]:value})
    }

    handleClick(event){
        const name=event.target.name
        if(name==="searchBox"){
            this.setState({'bodyButton':""})
        }

        else{
            this.setState({'searchBox':''})
            this.setState({'bodyButton':""})
        }
    }

    displayExercises(){

        const that =this

        /* Creating all the exercises into cards to display */
        const exercises=this.state.exercises.map(function(exercise){
            return  <Exercise name={exercise.name} description={exercise.description} category={exercise.category} LanguageName={exercise.language.full_name} Equipment={exercise.equipment} secondaryMuscle={exercise.muscles_secondary}/>
        })

        /*Filtering the cards displayed to suit whats searched in searchbar */
        const filtered = exercises.filter(function(filter){

            const equipment= filter.props.Equipment.map(function(oi){
                return oi.name
            })
            return ((filter.props.name.toLowerCase().includes(that.state.searchBox.toLowerCase()) || (equipment.toString().toLowerCase().includes(that.state.searchBox.toLowerCase()))) && (filter.props.LanguageName.toLowerCase().includes(that.state.Language.toLowerCase())))          //taking the name of each exercise then if whatever is in search is included it will update the state
        })

        /*Grab the exercises associated with value of button after searching  */
        const bodyFiltered=filtered.filter(function(filter){
            return filter.props.category.id.toString().includes(that.state.bodyButton)
        })


        if (that.state.isLoading===true){
            return <LoadingMessage />
        }

        else {
            if (this.state.searchBox.length === 0) {       //if nothing inputted in searchbox

                if (bodyFiltered.length===0)        //if no exercises for a particular bodyPart button
                {
                    return <NoResultMessge />
                }
                else{                               //when nothing searched but want to see the exercises sectioned into bodyParts
                    return bodyFiltered
                }
            }
            else {

                if(filtered.length===0){            //if nothing found from the search
                    return <NoResultMessge />
                }

                else if(bodyFiltered.length===0){   //returning search of whole exercises when searched
                    return <NoResultMessge />
                }

                else{                               //returning all exercises when have something in seachbar
                    return bodyFiltered
                }
            }
        }
    }

    createButtons(){
        const that = this

        const x = this.state.exercises.map(function(t){
            return t.category
        }).filter(function(th,i,self){
            return i===self.findIndex(function(t){
                return t.id === th.id
            })
        })

        return x.map(function(body){
            return <BodyButton handleChange={that.handleChange}  bodyName={body.name} bodyID={body.id} bodyButton={that.state.bodyButton}/>
        })
    }


    render(){

        return(//Everything passed down , needs access to state
            <div className='min-h-screen'>

                    <Header handleChange={this.handleChange} Language={this.state.Language} handleClick={this.handleClick}/>

                    <div className='flex justify-center w-full mb-10'>
                        <div className='pl-4 pr-4 h-56 w-max rounded-full shadow-xl bg-humming dark:bg-gray-700'>

                            <div>
                                <Search handleChange={this.handleChange} seachBox={this.state.searchBox} handleClick={this.handleClick}/>

                                <div className='text-center mb-2'>
                                    {this.createButtons()}
                                </div>

                                <div className='text-center pr-3'><Reset handleChange={this.handleChange}/></div>
                            </div>
                        </div>
                    </div>


                <Main displayExercises={this.displayExercises()}/>

            </div>
        )
    }
}

export default GymContainer