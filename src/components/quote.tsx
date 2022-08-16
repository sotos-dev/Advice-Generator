interface IQuoteProps {
  advice: string
}

const Quote = ({ advice }: IQuoteProps) => {
  return (
    <>
      <p className="text-white text-2xl text-center sm:text-3xl">"{advice}"</p>
    </>
  )
}

export default Quote
