const puppeteer = require("puppeteer");
const { spawn } = require("child_process");

const server = spawn("deno", [
  "run",
  "--allow-all",
  "--unstable",
  "../demo/app.ts",
]);
server.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

server.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);
});

server.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

console.log(`stderr: ${server.stderr.toString()}`);
console.log(`stdout: ${server.stdout.toString()}`);

/**
 * @param {number} seconds
 */
const waitForSeconds = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

beforeAll(async (done) => {
  await waitForSeconds(20);
  done();
}, 30000);

describe("", () => {
  test("case 1", async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");

    // Test timer that constantly dispatch "add" action
    const getCurrentValue = async () => {
      const currentValueDiv = await page.$("#current-value");
      return (await currentValueDiv.getProperty("innerText")).jsonValue();
    };
    const currentValue1 = await getCurrentValue();
    await waitForSeconds(1.5);
    const currentValue2 = await getCurrentValue();
    expect(currentValue2 > currentValue1).toEqual(true);

    // Test stop timer, expect current value won't be added anymore
    await page.click("#stop-timer-button");
    const currentValue3 = await getCurrentValue();
    await waitForSeconds(1.5);
    const currentValue4 = await getCurrentValue();
    expect(currentValue3).toEqual(currentValue4);

    // Test fetching
    const getFetchedText = async () => {
      const fetchedTextDiv = await page.$("#fetched-text");
      return (await fetchedTextDiv.getProperty("innerText")).jsonValue();
    };
    const fetchedText1 = await getFetchedText();
    expect(fetchedText1).toEqual("");
    await page.click("#fetch-button");
    await waitForSeconds(2);
    const fetchedText2 = await getFetchedText();
    expect(fetchedText2.includes("[workspace]")).toEqual(true);

    // Test add button.
    // Expect tag attributes and style will be updated properly
    const getAddButtonStyle = async () => {
      return page.$eval("#add-button", (el) => el.style.backgroundColor);
    };
    const getInputValue = async () => {
      return page.$eval("#input", (el) => el.value);
    };
    const getCheckboxValue = async () => {
      return page.$eval("#checkbox", (el) => el.checked);
    };
    const addButtonStyle1 = await getAddButtonStyle();
    const inputValue1 = await getInputValue();
    const checkboxValue1 = await getCheckboxValue();
    const currentValue5 = await getCurrentValue();
    await page.click("#add-button");
    const addButtonStyle2 = await getAddButtonStyle();
    const inputValue2 = await getInputValue();
    const checkboxValue2 = await getCheckboxValue();
    const currentValue6 = await getCurrentValue();
    expect(addButtonStyle1).not.toEqual(addButtonStyle2);
    expect(inputValue1).not.toEqual(inputValue2);
    expect(checkboxValue1).not.toEqual(checkboxValue2);
    expect(currentValue6 - currentValue5).toEqual(1);

    // Test "Click Me" button
    // Expect "Click Me" button dispatch different action
    const currentValue7 = await getCurrentValue();
    await page.click("#click-me-button");
    const currentValue8 = await getCurrentValue();
    const diff1 = currentValue8 - currentValue7;

    const currentValue9 = await getCurrentValue();
    await page.click("#click-me-button");
    const currentValue10 = await getCurrentValue();
    const diff2 = currentValue10 - currentValue9;
    expect(diff1).toEqual(diff2);

    await browser.close();
  }, 30000);
});

afterAll(async (done) => {
  console.log("Tear down . . .");
  server.kill("SIGINT");
  await new Promise((resolve) => setTimeout(resolve, 10000));
  done();
}, 30000);
