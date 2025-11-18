import { navigate } from "@/src/navigation/NavigationUtils"
import { BASE_URL } from "@/src/store/config"
import axios from "axios"
// import RazorpayCheckout from "react-native-razorpay"
export const createTransaction =async(amount:number,userId:string)=>{
    try {
        const res = await axios.post(`${BASE_URL}/order/transaction`,{
            userId,
            amount:amount*100
        })
        console.log("Transaction Response:", res.data);
        return res.data
    } catch (error) {
        console.warn("Error in createTransaction gateway:",error);
        return null
    }
}

// export const createOrder = async(
//     key:string,
//     amount:number,
//     order_id:string,
//     cart:any,
//     userId:string,
//     address:string
// )=>{
//     try{

//         let options={
//             description:"E-KART Payment",
//             image:"https://i.ibb.co/7CQVJNm/1.png",
//             currency:"INR",
//             key:key,
//             amount:amount,
//             name:"E-KART",
//             order_id:order_id,
//             theme:{
//                 color:"#53a20e"
//             }
//         }

//         RazorpayCheckout.open(options).then(async (data:any)=>{
//             const today=new Date();
//             const sevenDaysFromNow = new Date();
//             sevenDaysFromNow.setDate(today.getDate()+7);

//             const res = await axios.post(`${BASE_URL}/order`,{
//                 razorpay_order_id:order_id,
//                 razorpay_payment_id:data?.razorpay_payment_id,
//                 razorpay_signature:data?.razorpay_signature,
//                 userId,
//                 cartItems:cart,
//                 deliveryDate:sevenDaysFromNow,
//                 address:address
//             })
//             navigate('PaymentSuccess',{
//                 price:amount/100,
//                 address:address
//             })
//         }).catch((err:any)=>{
//             console.error("Razorpay Error : ",err);
//             return {type:'error',message:'Payment Failed'}
//         })

//     }catch(error){
//         console.error("Error creating order : ",error);
//         return {type:'error',message:'Failed to create order'}
//     }
// }