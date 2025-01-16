import css from "./Description.module.css";

export default function Description({header, text}){
    return (
        <div>
            <h1 className={css.header}>{header}</h1>
            <p className={css.text}>{text}</p>
        </div>
    );
}