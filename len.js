const path = require('path');
const which = require('which');

  const nodePath = which.sync('node');
  const pathNode = path.dirname(nodePath);
  console.log('Đường dẫn của Node.js:', pathNode);
} catch (error) {
  console.error('Lỗi khi tìm đường dẫn của Node.js:', error);
}
