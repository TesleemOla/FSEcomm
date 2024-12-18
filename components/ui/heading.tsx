export default function Heading({item}:{item:string}) {
    return (
        <h3 className="text-lg sm:text-3xl font-semibold">
            {item}
        </h3>
    )
}