import Image from "next/image";


export default function Search() {
    async function onType(event){
        await fetch(`http://127.0.0.1:8000/api/search/?q=${event.target.value}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    return (
        <div className="container mx-auto py-20">
            <div className="block w-5/6 md:w-3/5 mx-auto rounded-2xl shadow-xl">
                <Image src="/images/magnifying-glass.svg" className="inline mx-1" height={30} width={30} alt="Magnifying glass"></Image>
                <input type="text" onChange={onType} className="md:w-11/12  h-9 placeholder:text-md outline-none mx-auto bg-inherit" placeholder="Search a movie..."></input>
            </div>
        </div>
    )
}