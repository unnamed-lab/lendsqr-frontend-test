/**
 * @description The deshboard modal backdrop component
 * @param state [boolean] useState for turning the modal backdrop off and on
 * @param handler [() => void] callback function
 * @returns JSX.Element
 */
export default function ModalBackdrop({
  state,
  handler,
}: {
  state: boolean;
  handler: () => void;
}) {
  return (
    <div
      className={`app-modal-backdrop ${state ? "show" : ""}`}
      onClick={handler}
    ></div>
  );
}
