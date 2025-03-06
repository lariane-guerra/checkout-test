import MalgaCheckout from "@malga-checkout/react";

function App() {
  return (
    <main>
      <MalgaCheckout
        debug
        publicKey="5ad0c1f3-d0c8-4e9e-aad8-f59c6efc8280"
        clientId="523afbe7-36dc-4654-9dba-e7167d0e5e2d"
        merchantId="df65cc19-495d-45c7-a7ab-4c6aac605d3c"
        // sessionId={sessionId || ""}
        paymentMethods={{
          credit: {
            installments: {
              quantity: 1,
              show: true,
            },
            showCreditCard: false,
            checkedSaveCard: false,
          },
        }}
        transactionConfig={{
          statementDescriptor: "test",
          amount: 300,
          description: "test",
          orderId: "",
          customerId: "",
          currency: "BRL",
          capture: true,
          customer: {
            email: "lariane@malga.io",
            name: "", //utilizo fast checkout n não vou ter nome
            phoneNumber: "", //utilizo fast checkout n não vou ter telefone
          },
        }}
        dialogConfig={{
          show: true,
          actionButtonLabel: "checkout.continue",
          errorActionButtonLabel: "checkout.tryAgain",
          successActionButtonLabel: "checkout.continue",
          successRedirectUrl: "/payment-success",
        }}
      />
    </main>
  );
}

export default App;
