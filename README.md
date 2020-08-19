# deno_font_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_font_dir)](https://github.com/justjavac/deno_font_dir/releases)
[![Build Status](https://github.com/justjavac/deno_font_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_font_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_font_dir)](https://github.com/justjavac/deno_font_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the path to the user's font directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value                                                | Example                            |
| ------- | ---------------------------------------------------- | ---------------------------------- |
| Linux   | `$XDG_DATA_HOME`/fonts or `$HOME`/.local/share/fonts | /home/justjavac/.local/share/fonts |
| macOS   | `$HOME/Library/Fonts`                                | /Users/justjavac/Library/Fonts     |
| Windows | –                                                    | –                                  |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import fontDir from "https://deno.land/x/font_dir/mod.ts";

fontDir();
// Lin: "/home/justjavac/.local/share/fonts"
// Mac: "/Users/justjavac/Library/Fonts"
// Win: null
```

## License

[deno_font_dir](https://github.com/justjavac/deno_font_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
