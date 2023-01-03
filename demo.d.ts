export { Console as ConsoleImports } from './imports/console';
export function render(lang: Lang, wit: string, options: Options): Files;
export type Files = [string, string][];
/**
* # Variants
* 
* ## `"js"`
* 
* ## `"rust"`
* 
* ## `"java"`
* 
* ## `"c"`
* 
* ## `"markdown"`
*/
export type Lang = 'js' | 'rust' | 'java' | 'c' | 'markdown';
export interface Options {
  rustUnchecked: boolean,
  jsCompat: boolean,
  jsInstantiation: boolean,
}
