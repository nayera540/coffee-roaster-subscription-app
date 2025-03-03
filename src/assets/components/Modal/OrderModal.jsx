import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./styles.module.scss";

function OrderModal({ openModal, setOpenModal, dispatch, selectedOptions, orderOptions }) {
    function checkOutOrder() {
        dispatch({ type: "clear_order" });
        setOpenModal(false);
    }

    function calculateOrder() {
        switch(selectedOptions.deliveries){
            case "Every week":
                return orderOptions.deliveries.options[0].price * 4;
            case "Every 2 weeks":
                return orderOptions.deliveries.options[1].price * 2;
            case "Every month":
                return orderOptions.deliveries.options[2].price;
            default:
                return 0;
        }
        console.log(orderOptions.deliveries.options[0].price);
        
    }


    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={openModal}
            onClose={() => setOpenModal(false)}
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <Sheet
                variant="plain"
                sx={{ maxWidth: 580, borderRadius: "md", boxShadow: "md" }}
            >
                <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    className="!font-fraunces bg-[#2c343e] !text-[#fff] !text-[2.7rem] rounded-t-md px-[3.5rem] py-[3rem] !font-black"
                >
                    Order Summary
                </Typography>
                <Typography
                    id="modal-desc"
                    textColor="text.tertiary"
                    className="pt-[2.6rem] px-[3.5rem] pb-[3.4rem]"
                >
                    <div className="close-container flex justify-end">
                        <p
                            className="close-btn flex flex-row font-fraunces text-[#2c343e] font-black cursor-pointer"
                            onClick={() => setOpenModal(false)}
                        >
                            <img
                                src="/images/editIcon.svg"
                                alt="edit icon"
                                className="w-[16px] h-[16px] mt-[3px] mr-[8px]"
                            />
                            Close to Edit
                        </p>
                    </div>
                    <div>
                        <p className={`summary-section ${styles["summary-section"]} font-fraunces font-black text-[2rem]`}>
                            "I drink my coffee as{" "}
                            <span>
                                {selectedOptions.preference
                                    ? selectedOptions.preference
                                    : "_____"}
                            </span>
                            , with a{" "}
                            <span>
                                {selectedOptions.beanType
                                    ? selectedOptions.beanType
                                    : "_____"}
                            </span>
                            .{" "}
                            <span>
                                {selectedOptions.quantity
                                    ? selectedOptions.quantity
                                    : "_____"}
                            </span>{" "}
                            ground ala{" "}
                            <span>
                                {selectedOptions.grindOption
                                    ? selectedOptions.grindOption
                                    : "_____"}
                            </span>
                            , sent to me{" "}
                            <span>
                                {selectedOptions.deliveries
                                    ? selectedOptions.deliveries
                                    : "_____"}
                            </span>
                            ."
                        </p>
                        <p className="font-barlow text-[#333d4b] font-thin leading-[1.6rem] opacity-[0.8] text-justify pt-[7px]">
                            Is this correct? You can proceed to checkout or go back to plan
                            selection if something is off. Subscription discount codes can also
                            be redeemed at the checkout.
                        </p>
                    </div>
                    <div className="checkout-container flex md:flex-row flex-col mt-[1.5rem]">
                        <p className="text-[#333d4b] font-fraunces text-[2.4rem] font-black mr-[1.5rem]">${calculateOrder().toFixed(2)}/mo</p>
                        <Button onClick={() => checkOutOrder()}>Checkout</Button>
                    </div>
                </Typography>
            </Sheet>
        </Modal>
    );
}

export default OrderModal;
