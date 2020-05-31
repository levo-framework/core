/** 
 * Copied from https://stackoverflow.com/a/57206405/6587634
 */
export const fileExists = async (filename: string): Promise<boolean> => {
  try {
    const stat = await Deno.stat(filename);
    // successful, file or directory must exist
    return true;
  } catch (error) {
    if (error && error.kind === Deno.errors.NotFound) {
      // file or directory does not exist
      return false;
    } else {
      // unexpected error, maybe permissions, pass it along
      throw error;
    }
  }
};
