/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ul = document.createElement('ul');	
  for (let friend of friends) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `${friend.firstName} ${friend.lastName}`;
  }	
  return ul;
}

