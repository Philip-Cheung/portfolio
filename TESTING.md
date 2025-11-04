# Testing Guide

## Running Tests

```bash
# Run all tests once
npm run test:run

# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui
```

## Test Coverage

### Dark Mode Toggle (`DarkModeToggle.test.jsx`)

Tests the dark mode toggle functionality:

✅ **Rendering Tests**
- Renders toggle button correctly
- Shows moon icon in light mode by default

✅ **Functionality Tests**
- Toggles to dark mode when clicked
- Toggles back to light mode when clicked again
- Applies `dark` class to `document.documentElement`
- Saves preference to localStorage

✅ **Persistence Tests**
- Initializes from localStorage preference
- Respects system preference when no localStorage value exists

✅ **Styling Tests**
- Has proper hover effects

## Manual Testing Checklist

### Dark Mode Toggle
1. Open the portfolio in your browser
2. Click the sun/moon icon in the top right
3. ✓ Background should change from white to dark slate
4. ✓ Text colors should invert
5. ✓ Refresh the page - dark mode should persist
6. ✓ Click again to toggle back to light mode

### Light Mode Card Visibility
1. Ensure you're in light mode
2. Scroll to the Experience section
3. ✓ Cards should have visible borders (gray-200)
4. ✓ Cards should have subtle shadows
5. ✓ On hover, borders should turn to brand-primary
6. ✓ On hover, shadow should increase

### Responsive Design
1. Test on desktop (1024px+)
2. Test on tablet (768px-1024px)
3. Test on mobile (<768px)
4. ✓ Navigation should work on all sizes
5. ✓ Cards should be readable on all sizes

## Writing New Tests

When adding new components, follow this pattern:

```javascript
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import YourComponent from '../YourComponent';

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## CI/CD Integration

Tests run automatically on every commit and pull request.

To add to CI pipeline, ensure this is in your workflow:

```yaml
- name: Run tests
  run: npm run test:run
```

