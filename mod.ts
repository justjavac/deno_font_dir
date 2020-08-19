/** Returns the path to the user's font directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                                                | Example                            |
 * | ------- | ---------------------------------------------------- | ---------------------------------- |
 * | Linux   | `$XDG_DATA_HOME`/fonts or `$HOME`/.local/share/fonts | /home/justjavac/.local/share/fonts |
 * | macOS   | `$HOME/Library/Fonts`                                | /Users/justjavac/Library/Fonts     |
 * | Windows | –                                                    | –                                  |
 */
export default function fontDir(): string | null {
  switch (Deno.build.os) {
    case "linux": {
      const xdg = Deno.env.get("XDG_DATA_HOME");
      if (xdg) return `${xdg}/fonts`;

      const home = Deno.env.get("HOME");
      if (home) return `${home}/.local/share/fonts`;
      break;
    }

    case "darwin": {
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Library/Fonts`;
      break;
    }
  }

  return null;
}
