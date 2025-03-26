
interface ButtonProps{
    onClick?:()=>void;
    type: 'primary' | 'secondary',
    text:string
}

export default function Button({onClick,type,text}:ButtonProps){

    return <div onClick={onClick} className={`text-white text-center text-xl px-6 py-2 ${type==="primary"?"bg-blue-900":"bg-blue-600"}`}>{text}</div>
}