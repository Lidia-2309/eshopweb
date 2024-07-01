import { DivOrder } from "./styles"
import Logo from "../../assets/logo.svg"
import SelectInput from "../../components/SelectInput"
import { useState } from "react";
import Navbar from "../../components/NavBar";
import Sidebar from "../../components/SideBar";
import OrderContainer from "../../components/OrderContainer";
import data from '../../mock/user.json'
import OrderDetails from "../../components/OrderDetails.tsx";


const OrderPage = () => {
    const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
    
    const handleSelectOrder = (orderNumber: string) => {
      setSelectedOrder(orderNumber);
    };

    const selectedOrderDetails = data.orders.find(order => order.orderNumber === selectedOrder);

    return (
        <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar>
            <OrderContainer onSelectOrder={handleSelectOrder}/>
          </Sidebar>
          {selectedOrderDetails && (
            <OrderDetails
              orderNumber={selectedOrderDetails.orderNumber}
              deliveryPrediction={selectedOrderDetails.deliveryPrediction}
              details={selectedOrderDetails.details}
              total={selectedOrderDetails.total}
              address={selectedOrderDetails.address}
            />
          )}
        </div>
      </div>
    )
}

export default OrderPage