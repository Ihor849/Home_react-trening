export const Controls1 = ({ onChange, currentItem, total }) => {
  return (
    <>
      <button
        type="button"
        disabled={currentItem === 1}
        onClick={() => onChange(-1)}
      >
        Назад
      </button>

      <button
        type="button"
        disabled={currentItem === total}
        onClick={() => onChange(1)}
      >
        Вперед
      </button>
    </>
  );
};
