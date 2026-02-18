/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if(typeof password !== 'string' || password == "" ) {
    return "weak";
  }

  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;
  let hasSpecialCharacter = false;
  let specialCharacter = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  for(let i=0 ; i < password.length; i++) {
    let char = password[i];

    if(char >= 'A' && char <= 'Z') {
      hasUppercase = true;
    }else if(char >= 'a' && char <= 'z') {
      hasLowercase = true; 
    }else if(char >= '0' && char <= '9' ) {
      hasNumber = true;
    }else if(specialCharacter.includes(char)) {
      hasSpecialCharacter = true;
    }
  }

  let score = 0;
  if(password.length >= 8) score++;
  if(hasUppercase) score++;
  if(hasLowercase) score++;
  if(hasNumber) score++;
  if(hasSpecialCharacter) score++;

  if(score === 5) {
    return "very strong";
  }else if(score === 4) {
    return "strong";
  }else if(score >= 2) {
    return "medium";
  }else {
    return "weak";
  }
}
