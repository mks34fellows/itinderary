export const INPUT_SUBMITTED = 'INPUT_SUBMITTED';

export function submitInput(input) {

  return {
    type: INPUT_SUBMITTED,
    payload: input
  }
}
