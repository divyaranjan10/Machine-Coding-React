Thinking Process for Machine Coding Problems

** General Thinking: **

1. What are the entities?
   ↓
2. What data does each entity need?
   ↓
3. What can change?
   ↓
4. What should be state?
   ↓
5. What actions/events change that state?
   ↓
6. Which component owns the state?
   ↓
7. What should be reusable child components?
   ↓
8. What are the edge cases?
   ↓
9. What effects/lifecycle behavior exists?
   ↓
10. How does state translate into UI?

** This is for Stacked Snackbar Machine Coding **

1. Identify the entities -> What things exist in the UI?
   Snackbar -> id, text, timer, variant
   Button

2. Identify what can change -> what info can be changed while the application is running
   The list of snackbars.

3. Identify User actions/events
   Add button action
   click on X on the snackbar
   timer event to remove the snackbar from the stack

4. Think about who owns the state (the state we have created) -> Which component needs to know about this state
   So, SnackbarContainer
   |
   | owns snackbars[]
   |
   ┌───┴────┐
   ↓ ↓
   Snackbar Snackbar

5. Map every requirement to state/logic

Requirement --- Thinking
Add snackbar --- Add object to array
Display message --- message property
Close manually --- Remove by id
Auto-close --- Timer associated with snackbar
Multiple --- Array of snackbars
Maximum 3 --- Enforce limit
Shift after removal --- React re-renders remaining array
Variants --- variant property

6. Think about the lifecycle - for example: When should the timer start, and when should it stop?

7. Decide how the stack behaves - Maximum 3 snackbars.

Queue approach:

Visible: 1 2 3
Queue: 4
