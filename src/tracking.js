export function getPublicTracking(shipment) {
  return {
    reference: shipment.reference,
    status: shipment.status,
    recipientEmail: shipment.recipientEmail,
    history: [...shipment.history],
  };
}
