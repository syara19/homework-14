import { BookForm } from "@/app/components/book/BookForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CreateBook() {
    const [book, setBook] = useState(null);
    const router = useRouter();
    const { id } = router.query;
    console.log(id)

    useEffect(()=>{
        const fetchBook = async ()=>{
            try {
                const res = await fetch(`http://localhost:3000/api/books/${id}`,{
                    method: "GET",
                });
                console.log(res.book)
                // setBook (res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchBook()
    },[id])


    console.log("test")
    return(
        <div>
            <BookForm />
        </div>
    )
}