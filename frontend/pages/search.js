import Image from "next/image";
import { useState } from "react";

const posterAPI = "https://image.tmdb.org/t/p/original"


export default function Search() {
    const [searchRes, setSearchRes] = useState([]);
    async function onEnter(event){
        if (event.key !== "Enter") {
            return;
        }
        // Run the server on this url only. Not localhost:3000!
        await fetch(`http://127.0.0.1:8000/api/search/?q=${event.target.value}`)
        .then(response => response.json())
        .then(data => {
            setSearchRes(data.results);
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="container mx-auto py-20">
            <img src="/images/light-logo.png" className="my-10 mx-auto" />
            <div className="block w-auto md:w-3/5 mx-auto rounded-2xl shadow-xl">
                <Image src="/images/magnifying-glass.svg" className="inline mx-1" height={30} width={30} alt="Magnifying glass"></Image>
                <input type="text" onKeyDown={onEnter} className="md:w-11/12 h-9 placeholder:text-md outline-none mx-auto bg-inherit" placeholder="Search a movie..."></input>
            </div>
            <div className="block w-5/6 mx-auto my-40 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                {searchRes.map(item => {
                    return (
                        <div key={item.id}>
                            {item.poster_path ? (
                                <Image className="mx-auto" width={200} height={500} src={posterAPI + item.poster_path}></Image>
                            ) : (
                                <Image className="mx-auto" width={200} height={500} src="/images/no-poster.png"></Image>
                            )}
                            <p className="text-center text-lg font-bold">{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}