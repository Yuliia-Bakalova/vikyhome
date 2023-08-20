import axios from "axios";
import { useEffect, useState } from "react";
import {
  CalcContainer,
  CalculatorTitle,
  CalculatorTotal,
  CalcList,
  Item,
  BtnChange,
  DeleteBtn,
  Input,

} from "./Calculator.styled";

const Calculator = () => {
  const initialSelectedItems =
    JSON.parse(localStorage.getItem("selectedItems")) || {};
  const [services, setServices] = useState([]);
  const [extra, setExtra] = useState([]);
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
  const [totalAmount, setTotalAmount] = useState(0);

  const apiUrl = process.env.REACT_APP_URL_SECRET;

  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  }, [selectedItems]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const servicesResponse = await axios.get(
       `${apiUrl}/api/v1/services/`
      );
      setServices(servicesResponse.data);

      const extraResponse = await axios.get(`${apiUrl}/api/v1/extra/`);
      setExtra(extraResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const isItemSelected = (itemId, type) => {
    return selectedItems.hasOwnProperty(`${itemId}-${type}`);
  };

  const handleServiceSelection = (itemId, type, quantity) => {
    const selectedItem =
      type === "service"
        ? services.find((service) => service.id === itemId)
        : extra.find((item) => item.id === itemId);

    const selectedItemKey = `${itemId}-${type}`;

    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [selectedItemKey]: {
        ...selectedItem,
        key: selectedItemKey,
        quantity: quantity === "" ? null : Number(quantity),
        isSelected: true,
        isButtonDisabled: true,
      },
    }));
  };

  const handleRemoveItem = (itemKey) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedItems = { ...prevSelectedItems };
      delete updatedItems[itemKey];
      return updatedItems;
    });
  };

  useEffect(() => {
    const amount = Object.values(selectedItems).reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
    setTotalAmount(amount);
  }, [selectedItems]);

  return (
    <CalcContainer>
      <CalculatorTitle>Доступні послуги:</CalculatorTitle>
      <CalcList>
        {services.map((service) => (
  <Item key={service.id}>
    <span>
      {service.title} - {service.price} ({service.price_description})
    </span>
    <div>
      {isItemSelected(service.id, "service") ? (
        <Input
          type="number"
          min="1"
          value={
            selectedItems[`${service.id}-service`]?.quantity === null
              ? ""
              : selectedItems[`${service.id}-service`]?.quantity
          }
          onChange={(e) =>
            handleServiceSelection(service.id, "service", e.target.value)
          }
        />
      ) : (
        <span>{}</span>

      )}
      <BtnChange
        onClick={() => handleServiceSelection(service.id, "service", 1)}
        disabled={selectedItems[`${service.id}-service`]?.isButtonDisabled}
      >
        {isItemSelected(service.id, "service") ? "Вибрано" : "Вибрати"}
      </BtnChange>
    </div>
  </Item>
))}
      </CalcList>

      <CalculatorTitle>Доступні додаткові послуги:</CalculatorTitle>
      <CalcList>
      {extra.map((item) => (
  <Item key={item.id}>
    <span>
      {item.title} - {item.price} ({item.price_description})
    </span>
    <div>
      {isItemSelected(item.id, "extra") ? (
        <Input
          type="number"
          min="1"
          value={
            selectedItems[`${item.id}-extra`]?.quantity === null
              ? ""
              : selectedItems[`${item.id}-extra`]?.quantity
          }
          onChange={(e) =>
            handleServiceSelection(item.id, "extra", e.target.value)
          }
        />
      ) : (
        <span>{}</span>
      )}
      <BtnChange
        onClick={() => handleServiceSelection(item.id, "extra", 1)}
        disabled={selectedItems[`${item.id}-extra`]?.isButtonDisabled}
      >
        {isItemSelected(item.id, "extra") ? "Вибрано" : "Вибрати"}
      </BtnChange>
    </div>
  </Item>
))}
      </CalcList>

      <CalculatorTitle>Вибрані послуги та додаткові послуги:</CalculatorTitle>
      <CalcList>
        {Object.keys(selectedItems).map((itemKey) => (
          <Item key={itemKey}>
            {selectedItems[itemKey].title} - {selectedItems[itemKey].price} (
            {selectedItems[itemKey].price_description}) - Кількість:{" "}
            {selectedItems[itemKey].quantity}
            <DeleteBtn onClick={() => handleRemoveItem(itemKey)}>X</DeleteBtn>
          </Item>
        ))}
      </CalcList>

      <CalculatorTotal>Загальна сума: {totalAmount} грн</CalculatorTotal>
    </CalcContainer>
  );
};

export default Calculator;
