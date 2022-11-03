import { Currency } from "@prisma/client";
import { GetServerSideProps } from "next";

interface Props {
  data: Array<Currency>;
}

const CurrencyPage = ({ data }: Props) => {
  return (
    <div>
      <h1>Currencies of the world</h1>
      {data?.map((currency, index) => {
        return (
          <li key={index}>
            {currency.name} – {currency.shortName}
          </li>
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: Props;
}> = async () => {
  const res = await fetch(`${process.env.BASE_PATH}/api/currency`);
  const data: Props = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default CurrencyPage;
