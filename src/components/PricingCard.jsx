const PricingCard = ({ title, price, packageInfo }) => {
  return (
    <div className="relative border rounded-lg shadow-md p-6 bg-white">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-green-500 font-semibold text-xl">{price}</p>
        <div className="p-4 bg-white border-t border-gray-300">
            <ul>
            {packageInfo.map((item, index) => (
                <li className="list-disc" key={index}>{item}</li>
            ))}
            </ul>
        </div>
    </div>
  );
};

export default PricingCard;
