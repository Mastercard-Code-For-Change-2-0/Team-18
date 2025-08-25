/**
 * Middleware to authorize users based on their roles.
 * @param {...string} allowedRoles - A list of roles that are allowed to access the route.
 * @returns {function} Express middleware function.
 */
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    // Check if the user object and role exist (attached by a previous authentication middleware)
    if (!req.user || !req.user.role) {
      return res.status(401).json({
        message: "Authentication error: User data is missing.",
      });
    }

    const userRole = req.user.role;

    // Check if the user's role is in the list of allowed roles
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        message: `Access Denied: Role '${userRole}' is not authorized to access this resource.`,
      });
    }

    // If the role is authorized, proceed to the next middleware or route handler
    next();
  };
};