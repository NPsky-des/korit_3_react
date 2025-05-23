export default function MyForm() {
  // 폼이 제출될 때 호출되는 함수 정의할 예정
  const handelSubmit = event => {
    event.preventDefault();
    alert(`폼이 제출되었습니다.`);
  }

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input type="submit" value="제출" />
      </form>
      <br />
    </>
  );
}