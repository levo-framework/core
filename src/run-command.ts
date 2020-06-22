export const runCommand = async (
  command: string,
): Promise<{ output: string; error: string }> => {
  console.log(`Executing "${command}"`);
  const process = Deno.run({
    cmd: command.split(" "),
    stdout: "piped",
    stderr: "piped",
  });
  const decoder = new TextDecoder();
  const [output, error] = await Promise.all(
    [
      process.output().then((output) => decoder.decode(output).trim()),
      process.stderrOutput().then((error) => decoder.decode(error).trim()),
    ],
  );
  if (error) {
    console.error("[error]", error);
  }
  return { output, error };
};
