const form = document.querySelector("#bookingForm");
const result = document.querySelector("#bookingResult");

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
document.querySelector("#date").min = `${yyyy}-${mm}-${dd}`;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const item = document.querySelector("#item").value;
  const people = document.querySelector("#people").value;
  const date = document.querySelector("#date").value || "待确认";
  const contact = document.querySelector("#contact").value.trim() || "待补充";

  const message = `你好，我想预约亮马河小黄鸭水上俱乐部：项目 ${item}，人数 ${people} 人，日期 ${date}，联系方式 ${contact}。我已关注账号，想使用粉丝优惠。`;

  result.innerHTML = `
    <strong>已生成预约信息</strong>
    <p>${message}</p>
    <button class="button primary" type="button" id="copyBooking">复制预约信息</button>
  `;

  document.querySelector("#copyBooking").addEventListener("click", async () => {
    await navigator.clipboard.writeText(message);
    document.querySelector("#copyBooking").textContent = "已复制";
  });
});
