import React, {FC, useState} from "react";

export const App: FC = () => {
    const [text, setText] = useState<string | null>(null);

    const handleClick = (): void => {
        setText('Это простой учебный конфиг')
    }

    return (
        <div>
            Привет, это базовая сборка веб-приложения на реакт
            <button onClick={handleClick}>Привет</button>
            <p>{text}</p>
        </div>
    )
};
