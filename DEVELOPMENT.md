# Development Guidelines

## Code Style

- Use TypeScript for all new components
- Follow React functional component patterns
- Use Tailwind CSS for styling
- Implement proper error boundaries
- Add loading states for async operations

## Component Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── dashboard/    # Dashboard-specific components
│   ├── layout/       # Layout components
│   └── sections/     # Page sections
├── pages/            # Route components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── assets/           # Static assets
```

## Best Practices

1. **Component Naming**: Use PascalCase for components
2. **File Organization**: Group related components in folders
3. **Type Safety**: Define proper TypeScript interfaces
4. **Performance**: Use React.memo for expensive components
5. **Accessibility**: Include proper ARIA labels and keyboard navigation

## Testing

- Write unit tests for utility functions
- Add integration tests for critical user flows
- Test responsive design on multiple screen sizes

## Deployment

- Run `npm run type-check` before commits
- Use `npm run build` for production builds
- Test with `npm run preview` before deployment