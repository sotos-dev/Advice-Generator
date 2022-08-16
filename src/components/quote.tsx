interface IQuoteProps {
  advice: string
}

const Quote = ({ advice }: IQuoteProps) => {
  return (
    <>
      <p className="text-white text-2xl text-center sm:text-3xl">&quot;{advice}&quot;</p>
    </>
  )
}

export default Quote
