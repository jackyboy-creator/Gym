import React from 'react'

function LanguageButton(props){

    return (
        <div>
            <select className='focus-within:outline-none focus:ring-2 focus:ring-bluey dark:border-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800  hover:bg-tealy bg-bermuda focus:outline-none border-2 border-gray-100 rounded-lg shadow-sm px-4 py-2 text-white' value={props.Language} onClick={props.handleClick} onChange={props.handleChange} name={'Language'}>
                <option className='dark:hover:bg-gray-800 ' value={'English'}> 🇬🇧&emsp;English</option>
                <option value={'Deutsch'}>🇩🇪&emsp;German</option>
                <option value={'Português'}>🇵🇹&emsp;Português</option>
                <option value={'Svenska'}>🇸🇪&emsp;Swedish</option>
            </select>
        </div>
)

}
export default  LanguageButton