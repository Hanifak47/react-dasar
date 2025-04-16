import './HelloWorld.css';

export default function HelloWorld() {
    const props = {
        text: "Hello World"
    }
    return (
        <>
            {/* <h1>Hello World</h1> */}
            {/* <p>Selamat Belajar React JS prof hanif</p> */}
            {/* outline style */}
            <HeaderHelloWorld />
            {/* inline style */}
            <ParagraphHelloWorld />
            {/* dicetak langsung */}
            <p>JOS BANGET</p>
            {/* dengan parameter */}
            <Jos text="Sangat JOS" />
            {/* parameter spread syntax */}
            <SpreadJos {...props} />
            {/* style diluar css */}
            <OuterLine text="MANTAP" />
        </>
    )
}

// outline style
function HeaderHelloWorld() {
    const text = "Hello World";
    return (
        <h1 style={{
            color: "red",
            backgroundColor: "aqua"
        }}>{text.toLocaleUpperCase()}</h1>
    )
}

// spread syntax
function SpreadJos({ text = "lupa" }) {
    // console.log(text);
    return (
        <p>{text}</p>
    )
}

// dengan parameter
function Jos({ text = "lupa kasih text" }) {
    const style = {
        color: "purple",
        backgroundColor: "green"
    }
    return (
        <h4>{text.toLocaleLowerCase()}</h4>
    )
}

// inline style
function ParagraphHelloWorld() {
    const text = "Selamat Belajar ReactJS";
    const style = {
        color: "blue",
        backgroundColor: "yellow"
    };

    return (
        <p style={style}>{text.toLocaleLowerCase()}</p>
    )
}

//outer line style
function OuterLine({ text = "JOS" }) {
    return (
        <>
            <h6 className="title">{text}</h6>
            <h6 className="content">{text}</h6>
        </>
    )
}