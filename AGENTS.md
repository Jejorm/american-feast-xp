# Coding Standards and Operational Guide

This document defines the coding standards, conventions, and operational workflows for the `my-project` repository. All agentic contributors must adhere to these guidelines to ensure consistency, quality, and maintainability.

## 1. Operational Commands

### Development
- **Start Development Server**: `bun run dev`
- **Build Application**: `bun run build`
- **Start Production Server**: `bun run start`

### Code Quality
- **Lint Codebase**: `bun run lint`

### Testing
This project uses a standard Next.js setup. While explicit test runners are not configured in `package.json` scripts, when adding tests, follow these conventions:
- Use standard `jest` or `vitest` structures if introduced.
- Ensure all new components or utilities have corresponding `.test.tsx` or `.test.ts` files in the same directory or a `__tests__` folder.
- **Running Single Tests**: Once a test runner is configured, use `npx jest -- <test-file>` or equivalent.

## 2. Code Style Guidelines

### React & TypeScript
- **Framework**: Next.js 16 (App Router).
- **Styling**: Tailwind CSS (with `@tailwindcss/postcss`).
- **Components**: Follow the existing patterns found in `components/ui/` (Radix UI primitives).
- **Typing**: Use TypeScript `5.7.3`. Prefer explicit interfaces and types. Avoid `any`.
- **Form Handling**: Use `react-hook-form` and `zod` for validation.
- **Component Style**: Functional components, hooks-first.
- **Imports**:
    - Absolute imports are preferred (configure via `tsconfig.json`).
    - Organize imports: Third-party libraries, followed by internal components/hooks/lib.

### File Structure
- `app/`: Next.js App Router routes and layouts.
- `components/ui/`: Reusable, atomic components.
- `components/`: Feature-specific or layout components.
- `hooks/`: Custom React hooks.
- `lib/`: Utility functions and shared logic (e.g., `cn` from `lib/utils.ts`).

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`).
- **Files/Folders**: kebab-case.
- **Variables/Functions**: camelCase.

### Error Handling
- Use `try-catch` blocks for asynchronous operations.
- Handle component errors gracefully with React Error Boundaries if necessary.
- Use `sonner` for toast notifications when user feedback is required.

### Best Practices
- **Atomic Components**: Keep `components/ui` components as generic and reusable as possible.
- **Hooks**: Keep hooks simple and focused. Extract logic into `lib/` if it doesn't need component state.
- **State Management**: Prefer React state/context or `tanstack` libraries if data fetching becomes complex.
- **Tailwind**: Utilize `tailwind-merge` and `clsx` to conditionally apply classes, keeping the component structure clean.

## 3. Repository-Specific Rules

- **Strict Adherence**: Follow existing patterns strictly. If adding a new component type, observe how `components/ui` handled it first.
- **Maintenance**: Keep `package.json` clean; only add necessary dependencies.
- **Documentation**: If creating complex features, add comments explaining the *why* of architectural decisions.
- **Safety**: Ensure all code paths are type-safe.

*This file is automatically tracked and updated to maintain repository integrity.*
