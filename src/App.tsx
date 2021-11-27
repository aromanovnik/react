import React from 'react';
import './App.css';
import Message from './сomponents/message/Message'

const textForMessage = 'Равным образом новая модель организационной деятельности требуют от нас анализа модели развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции играет важную роль в формировании соответствующий условий активизации.'

const App = () => {
    return (
        <div className="App">
            <Message text={textForMessage} />
        </div>
    );
}

export default App;
